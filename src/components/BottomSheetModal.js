import React from 'react';import {StyleSheet, View} from 'react-native';import Modal from 'react-native-modal';import {useTheme} from 'react-native-paper';const useStyles = () => {  const {colors} = useTheme();  return StyleSheet.create({    modal: {      justifyContent: 'flex-end',      margin: 0,    },    modalContent: {      backgroundColor: colors.white,      padding: 16,      borderTopLeftRadius: 10,      borderTopRightRadius: 10,    },  })};const BottomSheetModal = (  {    visible = false,    onHide = () => void 0,    children  }) => {  const styles = useStyles();    return (    <Modal      isVisible={visible}      onBackdropPress={onHide}      onSwipeComplete={onHide}      style={styles.modal}    >      <View style={styles.modalContent}>        {children}      </View>    </Modal>  );};export default BottomSheetModal;