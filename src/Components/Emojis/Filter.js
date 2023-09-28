import React from "react";
import emojiList from "./emojiList.json";

export const Filter = (SearchText, maxResults) => {
  return emojiList
    .filter((emoji) => {
      if (
        emoji.title.toLocaleLowerCase().includes(SearchText.toLocaleLowerCase())
      ) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
};
