import { Button } from "./Button";
import "../styles/sidebar.scss";

interface IResponse{
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface ISideBar {
  genres: IResponse[];
  selectedGenreId: number;
  handleClickButton: Function;
}

export function SideBar({
  genres,
  handleClickButton,
  selectedGenreId,
}: ISideBar) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}