import ErrorPage from '../components/ErrorPage';
import { errorDetails } from '../Data/errorData';

export default function Error400() {
  const errorData = errorDetails['400'];

  if (!errorData) {
    console.error("Data untuk Error 400 tidak ditemukan.");
    return <div>Error: Data untuk 400 tidak tersedia.</div>;
  }

  return (
    <ErrorPage
      errorCode={errorData.code}
      errorTitle={errorData.title}
      errorDescription={errorData.description}
      errorImage={errorData.errorImage}
    />
  );
}
