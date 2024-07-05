class UploadService {
    private static cloudinaryUrl = `https://api.cloudinary.com/v1_1/dwwd8u3xn/upload`;
    private static uploadPreset = `cdu5rmgp`;

    public static async uploadImage (image: File){
        const formData = new FormData();

        formData.append('upload_preset', this.uploadPreset);
        formData.append('file', image);
        return fetch(this.cloudinaryUrl, { method: 'POST', body: formData})
        .then(res => res.json())
        .then(data => data)
        .catch(error => error);
    }
}

export default UploadService;