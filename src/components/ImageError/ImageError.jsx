import errorImage from '../../images/error.jpg';

export default function ImageError() {
  return (
    <div role="alert">
      <img src={errorImage} width="800" alt="bad cat" className="ImageError" />
    </div>
  );
}
