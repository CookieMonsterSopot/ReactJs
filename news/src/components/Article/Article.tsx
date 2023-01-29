import React from "react";
import { ListItem, Card, ListItemText } from "@mui/material";
import { ArticleObj } from "../HomePage/HomePage";

interface ArticleProps {
  article: ArticleObj;
}

const Article = ({ article }: ArticleProps) => {
  return (
    <ListItem>
      <Card variant="outlined" sx={{ mb: "10px" }}>
        <a
          href={article.url}
          target="__blank"
          style={{ textDecoration: "none" }}
        >
          <img
            src={article.urlToImage}
            alt={article.title}
            style={{ width: "100%" }}
          />
          <ListItemText sx={{ color: "black", mx: "5%" }}>
            {article.title}
          </ListItemText>
        </a>
      </Card>
    </ListItem>
  );
};

export default Article;

// 1. Stwórz komponent Article, ten komponent będzie przyjmował 1 propsa: obiekt artykułu (nazwij go article) (jeden, pojedyńczy), do otypowania propsów i konkretnie propsa article użyj interfejsu ArticleObj
// 2. Komponent Article ma wyświetlać element ListItem (MUI)
// - w środku ListItem ma się wyświetlać element Card (MUI), ustaw mu propsy variant outlined, w sx'ach ustaw dolny margines na 10px
// - w środku Card wstaw anchor (tag <a>) ustaw mu href na article.url (własność obiektu atykułu z propsa), target na __blank w strybucie style ustaw textDecoration na none
// - w środku <a> wstaw tag <img>, ustaw muy src na article.urlToImage, alt na article.title, w atrybucie style ustaw mu szerokość na 100%
// - w środku <a>, pod img, wstaw ListItemText (MUI), w sx'ach ustaw color na black i mx na 5%. Text tego ListItemText to article.title
