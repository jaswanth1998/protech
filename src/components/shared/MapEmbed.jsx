import { LuMapPin } from 'react-icons/lu';

function MapEmbed({ address }) {
  // PLACEHOLDER — replace with real Google Maps embed or API integration
  return (
    <div className="flex h-64 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-inner md:h-96">
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
          <LuMapPin className="h-7 w-7 text-primary-dark" />
        </div>
        <p className="max-w-xs text-sm font-medium text-slate">
          {address || 'Google Map Embed Placeholder'}
        </p>
      </div>
    </div>
  );
}

export default MapEmbed;
