interface ITypeOfMovie {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface IHeader {
  selectedGenre: ITypeOfMovie;
}

export function Header({ selectedGenre }: IHeader) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>
  );
}