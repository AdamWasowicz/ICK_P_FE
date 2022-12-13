import React from 'react';
import { launchCameraAsync } from 'expo-image-picker';
import { ImagePickerOptions } from 'expo-image-picker/build/ImagePicker.types';
import { useAppDispatch } from '../../redux/hooks';
import { setIsAuthorized } from '../../redux/features/auth-slice';



const useLoginWithPhotoPage = () => {
    const dispatch = useAppDispatch();

    const onClickHandler = async () => {
        const cameraOptions: ImagePickerOptions = {
            allowsEditing: true,
            aspect: [2, 3],
            quality: 0.5,
        }

        const image = await launchCameraAsync(cameraOptions);
        console.log(image);
        
        dispatch(setIsAuthorized(true));  
    }

    return {
        onClickHandler,
    }
}

export default useLoginWithPhotoPage;