const images = import.meta.glob("../assets/vehicles/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function findImage(name: string) {
  const key = Object.keys(images).find((path) =>
    /* pega o arquivo pelo nome, ignorando a extensão */
    path.split("/").pop()?.replace(/\.(jpg|jpeg|png|webp)$/, "") === name
  );
  return key ? images[key] : undefined;
}

export function getVehicleImage(slug: string): string {
  return findImage(slug) ?? findImage("placeholder") ?? "";
}