export default function Loading() {
  return (
    <div className="min-h-screen flex-center bg-black">
      <div className="text-center space-y-6 animate-page-in">
        <div className="loader-orbit" />
        <div>
          <p className="text-white font-semibold text-lg">Chargement</p>
          <p className="text-white-50 text-sm mt-1">Préparation de l&apos;expérience 3D…</p>
        </div>
      </div>
    </div>
  );
}
