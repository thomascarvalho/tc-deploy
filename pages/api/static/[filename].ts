export default (_req: Request, res: any): Promise<Response> => {
  const file = new URL(
    res.params.filename,
    import.meta.url.replace("/pages/api", ""),
  );
  return fetch(file);
};
