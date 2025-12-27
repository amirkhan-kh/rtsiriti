import { IoEyeSharp } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { Button } from "../../components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogTrigger,
  DialogTitle,
  DialogDescription 
} from "../../components/ui/dialog";
import { useState } from "react";
import { documentsPdf, documentsPdfDoct } from "../../store/documents";
import { useTranslation } from "react-i18next";


interface DialogDemoProps {
  documentId: number;
}

export function DialogDemo({ documentId }: DialogDemoProps) {
  const { t } = useTranslation("InternalDocuments");


  const currentDoc = documentsPdf.find(doc => doc.id === documentId);
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = () => {
    if (currentDoc?.pdf) {
      const link = document.createElement('a');
      link.href = currentDoc.pdf;
      link.download = currentDoc.pdf.split('/').pop() || 'document.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (!currentDoc) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="icon"
          className="h-8 w-14 border-blue-200 hover:bg-blue-50"
        >
         <FiDownload className="h-4 w-4 text-[#4c75f6]"/>
          <IoEyeSharp className="h-4 w-4 text-[#4c75f6]" />
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-4xl h-[80vh] p-0">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 ">
            <div className="py-4">
              <DialogTitle className="text-lg font-semibold ">
                {t(currentDoc.title)}
              </DialogTitle>
              <DialogDescription className="text-sm text-gray-500">
                PDF download or view
              </DialogDescription>
            </div>
            
            <Button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-[#4c75f6] hover:bg-[#3b5cb8]"
            >
              <FiDownload className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex-1 p-4 overflow-hidden">
            <div className="h-full  overflow-hidden">
              <iframe
                src={`${currentDoc.pdf}#view=fitH`}
                className="w-full h-full"
                title={currentDoc.title}
              />
              
              <div className="hidden">
                <embed
                  src={currentDoc.pdf}
                  type="application/pdf"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t text-sm text-gray-500">
            <p>Fayl: {currentDoc.pdf.split('/').pop()}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function DialogDemoDoc({ documentId }: DialogDemoProps) {
  const { t } = useTranslation("Doctoral");


  const currentDocDoc = documentsPdfDoct.find(doc => doc.id === documentId);
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = () => {
    if (currentDocDoc?.pdf) {
      const link = document.createElement('a');
      link.href = currentDocDoc.pdf;
      link.download = currentDocDoc.pdf.split('/').pop() || 'document.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (!currentDocDoc) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="icon"
          className="h-8 w-14 border-blue-200 hover:bg-blue-50"
        >
         <FiDownload className="h-4 w-4 text-[#4c75f6]"/>
          <IoEyeSharp className="h-4 w-4 text-[#4c75f6]" />
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-4xl h-[80vh] p-0">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 ">
            <div className="py-4">
              <DialogTitle className="text-lg font-semibold">
                {t(currentDocDoc.title)}
              </DialogTitle>
              <DialogDescription className="text-sm text-gray-500">
                PDF download or view
              </DialogDescription>
            </div>
            
            <Button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-[#4c75f6] hover:bg-[#3b5cb8]"
            >
              <FiDownload className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex-1 p-4 overflow-hidden">
            <div className="h-full  overflow-hidden">
              <iframe
                src={`${currentDocDoc.pdf}#view=fitH`}
                className="w-full h-full"
                title={currentDocDoc.title}
              />
              
              <div className="hidden">
                <embed
                  src={currentDocDoc.pdf}
                  type="application/pdf"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t text-sm text-gray-500">
            <p>Fayl: {currentDocDoc.pdf.split('/').pop()}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}