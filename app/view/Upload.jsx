import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  View,
  Image,
  Button,
  StyleSheet,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { storage } from "../config/firebase";
import Center from "../components/Center";

const expoRequestMediaLibraryPerms = async () => {
  if (Platform.OS !== "web") {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, you need to allow image access to upload an image.");
    }
  }
};

const ProfilePhoto = ({ onUpload }) => {
  const [image, setImage] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    expoRequestMediaLibraryPerms();
  }, []);

  const _handleSubmitProfilePhoto = () => {
    onUpload(imageURL);
  };

  const uploadImageAsync = async (uri) => {
    setUploading(true);
    console.log("uploading...");
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    const ref = storage.ref().child(`screenshots/testImage`);
    const snapshot = await ref.put(blob);

    blob.close();

    const firebaseUri = await snapshot.ref.getDownloadURL();
    setImageURL(firebaseUri);
    setUploading(false);
    console.log("upload complete :)");
  };

  const chooseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      uploadImageAsync(result.uri);
    }
  };

  const _maybeRenderUploadingOverlay = () => {
    if (uploading) {
      return (
        <Center>
          <ActivityIndicator color="#fff" animating size="large" />
        </Center>
      );
    }
  };

  const _maybeRenderImage = () => {
    if (!imageURL || imageURL.length === 0 || uploading) {
      return;
    }

    return (
      <View style={styles.imageContainer}>
        <View style={styles.imageSubContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        <Button title="continue" onPress={_handleSubmitProfilePhoto} />
      </View>
    );
  };
  return (
    <Center>
      <Button title="choose an image" onPress={chooseImage} />
      {_maybeRenderImage()}
      {_maybeRenderUploadingOverlay()}
    </Center>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 30,
    width: 250,
    borderRadius: 3,
    elevation: 2,
  },
  imageSubContainer: {
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.2,
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 5,
    overflow: "hidden",
  },
  image: { width: 250, height: 250 },
});

export default ProfilePhoto;
