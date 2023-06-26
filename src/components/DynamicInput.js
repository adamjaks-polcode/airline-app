import {StyleSheet, View} from 'react-native';import {Text} from 'react-native-paper';import {TouchableOpacity} from 'react-native-gesture-handler';const DynamicInput = (  {    label = "",    value = "",    onPress = () => void 0  }) => {  return (    <TouchableOpacity onPress={onPress}>      <View style={styles.wrapper}>        <Text>{label}</Text>        <Text style={styles.value}>{value}</Text>      </View>    </TouchableOpacity>  )};const styles = StyleSheet.create({  wrapper: {    backgroundColor: '#d9dcf0',    paddingVertical: 8,    paddingHorizontal: 16,    borderRadius: 4,  },  value: {    fontSize: 16  }});export default DynamicInput;