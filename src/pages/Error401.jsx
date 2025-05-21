import ErrorPage from '../components/ErrorPage';
import { errorDetails } from '../Data/errorData';

export default function Error401() {
  const errorData = errorDetails['401'];

  if (!errorData) {
    console.error("Data untuk Error 401 tidak ditemukan.");
    return <div>Error: Data untuk 401 tidak tersedia.</div>;
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
