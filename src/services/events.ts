import { gql } from "apollo-boost";

export const GET_EVENTS = gql`
  query {
    publishedEvents {
      ...events
      ...error
    }
  }

  fragment events on Events {
    data {
      __typename
      id
      eventType
      creationDate
      publishingDate
      status
      activities {
        id
        title
        description
        attendanceType
        venue
        image {
          id
          src
        }
        schedule {
          startDate
          endDate
        }
      }
      ...singleEvent
      ...multipleEvent
    }
  }

  fragment singleEvent on SingleEvent {
    status
  }

  fragment multipleEvent on MultipleEvent {
    title
    description
    image {
      id
      src
    }
    locationType
    physicalVenue
    onlineVenue
  }

  fragment error on Error {
    details {
      propertyName
      messageError
    }
  }
`;
