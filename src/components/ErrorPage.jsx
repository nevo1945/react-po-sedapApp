import React from 'react';

function ErrorPage({ errorCode, errorTitle, errorDescription, errorImage }) {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">
        {/* Kolom Gambar */}
        <div className="w-full md:w-2/5 flex justify-center">
          {errorImage ? (
            <img
              src={errorImage}
              alt={`Error ${errorCode}`}
              className="w-full max-w-[400px] h-auto rounded-lg"
              onError={() => console.error("Gagal memuat gambar error")}
            />
          ) : (
            <div className="w-[200px] h-[300px] bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
              [No Image]
            </div>
          )}
        </div>

        {/* Kolom Teks */}
        <div className="w-full md:w-3/5 text-center md:text-left">
          <h1 className="text-6xl md:text-8xl font-bold text-red-500 leading-none mb-3">
            {errorCode}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            {errorTitle}
          </h2>
          <p className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed">
            {errorDescription}
          </p>
          <a
            href="/"
            className="inline-block px-6 py-2 border border-red-500 text-red-500 font-medium rounded-full hover:bg-red-500 hover:text-white transition duration-200 ease-in-out"
          >
            ← Kembali ke Beranda
          </a>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
