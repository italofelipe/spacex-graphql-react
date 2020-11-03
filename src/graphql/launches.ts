import gql from "graphql-tag";

export const LAUNCHES_PAST_QUERY = gql`
  query launchesPast {
    launchesPast {
      id
      mission_name
      launch_date_utc
      links {
        flickr_images
      }
      rocket {
        rocket_name
        rocket_type
      }
    }
  }
`;
