import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';

interface anySvgProps {
  name: String;
  width?: any;
  height?: any;
  style?: ViewStyle;
  containerstyle?: ViewStyle;
  onPress?: any;
  disabled?: boolean;
}

const AnySvg = ({ name, width, style, containerstyle, height, onPress, disabled = true }: anySvgProps) => {
  const Tag: any = name;

  return (
    <>
      {name && (
        <TouchableOpacity
          activeOpacity={0.7}
          style={[{ justifyContent: "center", alignItems: "center" }, containerstyle]}
          disabled={disabled}
          onPress={() => {
            onPress ? onPress() : console.log('Nothing to act');
          }}>
          <Tag
            width={width}
            height={height}
            style={style} />
        </TouchableOpacity>
      )}
    </>
  );
}

export default AnySvg;