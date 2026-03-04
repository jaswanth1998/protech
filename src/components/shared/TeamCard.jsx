import { useState } from 'react';
import { LuLinkedin, LuUser } from 'react-icons/lu';

function TeamCard({ name, title, photo, bio, linkedIn }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group h-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
      {/* Photo */}
      <div className="relative flex h-56 items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        {photo ? (
          <img
            src={photo}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            width={300}
            height={224}
          />
        ) : (
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/80 shadow-sm">
              <LuUser className="h-10 w-10 text-gray-400" />
            </div>
          </div>
        )}
        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="font-heading text-lg font-semibold text-navy-dark">{name}</h3>
        <p className="text-sm font-medium text-primary-dark">{title}</p>

        {/* Bio — expandable */}
        {bio && (
          <>
            <p
              className={`mt-3 text-sm leading-relaxed text-slate ${!expanded ? 'line-clamp-2' : ''}`}
            >
              {bio}
            </p>
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-1.5 text-xs font-semibold text-primary-dark transition-colors hover:text-primary"
            >
              {expanded ? 'Show Less' : 'Read More'}
            </button>
          </>
        )}

        {/* LinkedIn */}
        {linkedIn && (
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on LinkedIn`}
            className="mt-3 inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm text-slate transition-all hover:bg-primary-muted hover:text-primary-dark"
          >
            <LuLinkedin className="h-4 w-4" />
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}

export default TeamCard;
