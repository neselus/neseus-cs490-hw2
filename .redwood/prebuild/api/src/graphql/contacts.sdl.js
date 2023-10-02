import gql from "graphql-tag";
export const schema = gql`
  type Contact {
    id: Int!
    name: String!
    email: String!
    message: String!
    createdAt: DateTime!
  }

  type Query {
    contacts: [Contact!]! @requireAuth
    contact(id: Int!): Contact @requireAuth
  }

  input CreateContactInput {
    name: String!
    email: String!
    message: String!
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact! @skipAuth
  }
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvY29udGFjdHMuc2RsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY2hlbWEgPSBncWxgXG4gIHR5cGUgQ29udGFjdCB7XG4gICAgaWQ6IEludCFcbiAgICBuYW1lOiBTdHJpbmchXG4gICAgZW1haWw6IFN0cmluZyFcbiAgICBtZXNzYWdlOiBTdHJpbmchXG4gICAgY3JlYXRlZEF0OiBEYXRlVGltZSFcbiAgfVxuXG4gIHR5cGUgUXVlcnkge1xuICAgIGNvbnRhY3RzOiBbQ29udGFjdCFdISBAcmVxdWlyZUF1dGhcbiAgICBjb250YWN0KGlkOiBJbnQhKTogQ29udGFjdCBAcmVxdWlyZUF1dGhcbiAgfVxuXG4gIGlucHV0IENyZWF0ZUNvbnRhY3RJbnB1dCB7XG4gICAgbmFtZTogU3RyaW5nIVxuICAgIGVtYWlsOiBTdHJpbmchXG4gICAgbWVzc2FnZTogU3RyaW5nIVxuICB9XG5cbiAgdHlwZSBNdXRhdGlvbiB7XG4gICAgY3JlYXRlQ29udGFjdChpbnB1dDogQ3JlYXRlQ29udGFjdElucHV0ISk6IENvbnRhY3QhIEBza2lwQXV0aFxuICB9XG5gIl0sIm1hcHBpbmdzIjoiT0FBc0JBLEdBQUc7QUFBekIsT0FBTyxNQUFNQyxNQUFNLEdBQUdELEdBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIn0=