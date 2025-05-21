import ErrorPage from '../components/ErrorPage';
import { errorDetails } from '../Data/errorData';

export default function Error403() {
  const errorData = errorDetails['403'];

  if (!errorData) {
    console.error("Data untuk Error 403 tidak ditemukan.");
    return <div>Error: Data untuk 403 tidak tersedia.</div>;
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
