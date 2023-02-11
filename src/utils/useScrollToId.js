export const useScrollToId = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};
