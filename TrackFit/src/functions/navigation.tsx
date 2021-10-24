/**
 *  A more usable, dynamic navigation which passes the path and direction.
 * @param path
 * @param direction
 * @param router
 */
export const dynamicNavigate = (
  path: String,
  direction: String,
  router: any
) => {
  const action = direction === "forward" ? "push" : "pop";
  router.push(path, direction, action);
};

/**
 * Navigate back to the previous screen
 * @param router
 */
export const navigateBack = (router: any) => {
  if (router.canGoBack()) {
    router.goBack();
  }
};
