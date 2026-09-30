interface PageProps {
  params: Promise<{
    folderId: string;
  }>;
}

export default async function FolderPage({ params }: PageProps) {
  const { folderId } = await params;

  return (
    <div className="w-full min-h-screen">
      <iframe
        src={`https://drive.google.com/embeddedfolderview?id=${folderId}#grid`}
        className="w-full h-screen border-0"
      />
    </div>
  );
}