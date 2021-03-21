import React from "react";
import {Stage, Layer, Text} from "react-konva"

export const EditorPage = () =>{
  return (
    <div>
      edit
      <Stage
        width={100}
        height={100}
      >
        <Layer>
          <Text
            height={100}
            text="textt"
            fontSize={20}
          />
        </Layer>
      </Stage>
    </div>
  );
}