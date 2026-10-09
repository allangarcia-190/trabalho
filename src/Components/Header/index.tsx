import { Text, View } from 'react-native';
type HeaderProps = {
    title: string;
    subtitle?: string;
};
export default function Header({title, subtitle}: HeaderProps) {
    return (
        <View>
            <Text style={{fontSize:24, fontWeight:'bold', textAlign:'center', padding:10}}>{title}</Text>
            {subtitle && <Text style={{fontSize:16, textAlign:'center', padding:10}}>{subtitle}</Text>}


        </View>
        )
}