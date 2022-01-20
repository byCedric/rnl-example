import { Text, TextProps } from './Themed';

type MonoTextProps = TextProps & {
  familyName: 'space' | 'deepspace';
}

export function MonoText(props: MonoTextProps) {
  return (
    <Text
      {...props}
      style={[
        props.style, 
        { fontFamily: `${props.familyName}-mono` }
      ]}
    />
  );
}
