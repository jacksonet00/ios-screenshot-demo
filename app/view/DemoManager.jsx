import React, { useState } from "react";
import { View } from "react-native";
import Screenshot from "./Screenshot";
import Upload from "./Upload";

export default function DemoManager() {
  const [imageUrl, setImageUrl] = useState(null);
  return (
    <React.Fragment>
      {imageUrl ? (
        <Screenshot image={imageUrl} />
      ) : (
        <Upload onUpload={(uri) => setImageUrl(uri)} />
      )}
    </React.Fragment>
  );
}
