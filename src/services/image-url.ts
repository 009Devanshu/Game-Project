import noImage from '../assets/placeholder.png'
const getCroppedImageUrl = (url:string)=>{
    if(!url) return noImage;
    const target = 'media/';
    const index = url.indexOf(target) + 'media/'.length;
    return url.slice(0,index) + 'crop/600/400/'+url.slice(index);
}
export default getCroppedImageUrl;