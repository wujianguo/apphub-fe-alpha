export enum Visibility {
  // Organization or application access must be granted explicitly to each user.
  Private = 'Private',

  // The organization or application can be viewed by any logged in user.
  Internal = 'Internal',

  // The organization or application can be viewed without any authentication.
  Public = 'Public',
}
