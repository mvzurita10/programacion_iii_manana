export interface PublicPostDto {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  category?: {
    name: string;
  };
}