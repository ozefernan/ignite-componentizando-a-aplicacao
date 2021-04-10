import { Button } from "./Button";

interface SidebarProps {
  selectedGenreId: Number;
  genres: array;
  onClickButton: () => void;
}

export function SideBar({
  selectedGenreId,
  genres,
  onClickButton,
}: SidebarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
