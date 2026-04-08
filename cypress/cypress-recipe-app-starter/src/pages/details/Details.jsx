import React from "react";
import { useLocation } from "react-router-dom";
import {
  DetailContainer,
  DetailPart,
  HeaderContainer,
  ImgContainer,
  IngredContainer,
  OtherPart,
} from "./DetailsStyles";
import dietSvg from "../../assets/diet.svg";

const Details = () => {
  const location = useLocation();
  const recipeDet = location?.state?.recipe;

  if (!recipeDet) {
    return (
      <DetailContainer>
        <HeaderContainer>
          <h1>Recipe not found</h1>
          <img src={dietSvg} alt="" />
        </HeaderContainer>
      </DetailContainer>
    );
  }

  const category = recipeDet.mealType?.[0] || recipeDet.category || "-";
  const area = recipeDet.cuisineType?.[0] || recipeDet.area || "-";
  const tags =
    Array.isArray(recipeDet.tags)
      ? recipeDet.tags
      : typeof recipeDet.tags === "string"
        ? recipeDet.tags.split(",").filter(Boolean)
        : [];

  const source = recipeDet.url || recipeDet.source || "";

  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{recipeDet.label}</h1>
        <img src={dietSvg} alt="" />
      </HeaderContainer>

      <DetailPart>
        <OtherPart>
          <>Nutrients</>

          <p>Category: {category}</p>
          <p>Area: {area}</p>

          {tags.length > 0 && (
            <p>
              Tags: {tags.slice(0, 5).join(", ")}
              {tags.length > 5 ? "..." : ""}
            </p>
          )}

          {source ? (
            <p>
              Source:{" "}
              <a href={source} target="_blank" rel="noreferrer">
                Open
              </a>
            </p>
          ) : (
            <p>Source: -</p>
          )}
        </OtherPart>

        <ImgContainer>
          <img src={recipeDet.image} alt={recipeDet.label} />
        </ImgContainer>

        <IngredContainer>
          {(recipeDet.ingredientLines || []).map((item, index) => (
            <p key={index}>
              {index + 1}. - {item}
            </p>
          ))}
        </IngredContainer>
      </DetailPart>
    </DetailContainer>
  );
};

export default Details;