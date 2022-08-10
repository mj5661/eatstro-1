import { gql } from "@apollo/client";

export const fetchFoodItemsQuery = gql`
  query{
  items{
    id,
    name,
    photo,
    price,
    createdAt,
    cuisineType,
    desc,
    dietaryChoice,
    favoriteCount,
    isPublished,
    kitchen {
    	id,
      createdAt,
      desc,
      favoriteCount,
      isPublished,
      name,
      photo
  	}
	}
}
`;