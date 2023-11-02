import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useRef, useState, useMemo, useCallback } from 'react';
import COLORS from '../../../components/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';

export const imagesDataURL = ['https://images.unsplash.com/photo-1631947430066-48c30d57b943?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1432&q=80'];

const Profile = () => {
  const [selectImage, setSelectImage] = useState(imagesDataURL[0]);

  const bottomSheetModalRef = useRef(null);

  const snapPoints = ['25%', '45%'];

  const handleImageSelection = () => {
    bottomSheetModalRef.current?.present();
  };

  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleClosePress = () => {
    bottomSheetModalRef.current?.close();
  };

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setSelectImage(image.path);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setSelectImage(image.path);
    });
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white, paddingHorizontal: 20 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: 'center', marginVertical: 22 }}>
          <Image
            source={{ uri: selectImage }}
            style={{
              height: 170,
              width: 170,
              borderRadius: 85,
              borderWidth: 2,
              borderColor: COLORS.primary
            }}
          />
          <TouchableOpacity onPress={handleImageSelection} >
            <View style={{
              position: "absolute",
              bottom: -1,
              right: -70,
              zIndex: 9999,
            }}>
              <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                height: 40,
                width: 40,
                borderRadius: 40,
                backgroundColor: COLORS.white,
                // borderWidth: 2,  
                // borderColor: COLORS.primary,
                elevation: 15,
              }} >
                <MaterialCommunityIcons
                  name='pencil'
                  size={28}
                  color={COLORS.primary}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'center' }}>
          <LinearGradient
            colors={['#8ee8d4', '#32806f']}
            style={styles.nickName}>
            <Text style={styles.textSign}>Dulaj Mithun</Text>
            {/* <MaterialIcons name="navigate-next" color="#fff" size={20} /> */}
          </LinearGradient>
        </View>

        <View style={{ padding: 10 }}>
          <Text style={styles.text_footer}>Name</Text>
          <View style={styles.action}>
            <Icon
              name='person'
              size={18}
              color={COLORS.dark}
            />
            <TextInput
              placeholder='Your Name'
              placeholderTextColor='#666666'
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>
        </View>

        <View style={{ padding: 10, paddingTop: 10 }}>
          <Text style={styles.text_footer}>Address</Text>
          <View style={styles.action}>
            <Icon
              name='home'
              size={18}
              color={COLORS.dark}
            />
            <TextInput
              placeholder='Your Address'
              placeholderTextColor='#666666'
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>
        </View>

        <View style={{ padding: 10, paddingTop: 10 }}>
          <Text style={styles.text_footer}>Phone Number</Text>
          <View style={styles.action}>
            <Icon
              name='call'
              size={18}
              color={COLORS.dark}
            />
            <TextInput
              placeholder='Your Phone Number'
              placeholderTextColor='#666666'
              style={styles.textInput}
              autoCapitalize="none"
              keyboardType='number-pad'
            />
          </View>
        </View>

        <View style={{ padding: 10, paddingTop: 10 }}>
          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            <MaterialIcons
              name='email'
              size={18}
              color={COLORS.dark}
            />
            <TextInput
              placeholder='Your Email'
              placeholderTextColor='#666666'
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>
        </View>

        <View style={{ flexDirection: 'row', paddingTop: 10, justifyContent: 'space-between' }}>
          <View style={{ paddingLeft: 8 }}>
            <TouchableOpacity style={{ color: COLORS.secondary }}>
              <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styles.exitAndShare}>
                <MaterialCommunityIcons
                  name='share'
                  size={28}
                  color={COLORS.white}
                />
                {/* <Text style={styles.textSign}>Share</Text> */}
                {/* <MaterialIcons name="navigate-next" color="#fff" size={20} /> */}
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={{ color: COLORS.secondary }}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.saveIn}>
              <Text style={styles.textSign}>Save</Text>
              {/* <MaterialIcons name="navigate-next" color="#fff" size={20} /> */}
            </LinearGradient>
          </TouchableOpacity>

          <View style={{ paddingRight: 8 }}>
            <TouchableOpacity style={{ color: COLORS.secondary }}>
              <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styles.exitAndShare}>
                <MaterialCommunityIcons
                  name='logout'
                  size={25}
                  color={COLORS.white}
                />
                {/* <Text style={styles.textSign}>Save</Text> */}
                {/* <MaterialIcons name="navigate-next" color="#fff" size={20} /> */}
              </LinearGradient>
            </TouchableOpacity>
          </View>

        </View>

      </ScrollView>

      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          backgroundStyle={{ borderRadius: 30 }}
        >
          <View style={styles.panel}>
            <Text style={styles.panelTitle}>Upload Photo</Text>
            <Text style={styles.panelSubTitle}>Choose From Library</Text>

            <TouchableOpacity style={styles.panelButtonTouch} onPress={takePhotoFromCamera}>
              <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styles.panelButton}>
                <Text style={styles.textSign}>Take Photo</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.panelButtonTouch, { paddingTop: 40, paddingBottom: 40 }]} onPress={choosePhotoFromLibrary}>
              <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styles.panelButton}>
                <Text style={styles.textSign}>Choose From Library</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.panelButtonTouch} onPress={handleClosePress}>
              <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styles.panelButton}>
                <Text style={styles.textSign}>Cancel</Text>
              </LinearGradient>
            </TouchableOpacity>

          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>

    </SafeAreaView>

  );
}



const styles = StyleSheet.create({
  nickName: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 15,
  },
  action: {
    flexDirection: 'row',
    marginTop: 7,
    borderBottomWidth: 2,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 0,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a'
  },
  saveIn: {
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  exitAndShare: {
    width: 40,
    height: 40,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  panel: {
    padding: 20,
    backgroundColor: COLORS.white,
    paddingTop: 20,
    alignItems: 'center',
  },
  panelTitle: {
    fontSize: 27,
    height: 35
  },
  panelSubTitle: {
    fontSize: 17,
    color: COLORS.grey,
    height: 30,
    marginBottom: 10,
  },
  panelButtonTouch: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  panelButton: {
    width: '150%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
})

export default Profile;