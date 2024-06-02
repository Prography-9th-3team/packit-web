import { ChangeEvent, DragEvent, useState } from 'react';

interface Props {
  maxNum?: number;
  extenstion?: Array<string>;
}

interface IFile {
  key: string;
  name: string;
  size: number;
  type: string;
  originFile: File;
}

const useDragUpload = ({ maxNum = 3, extenstion = [] }: Props) => {
  const MAX_SIZE = 5 * 1024 * 1024;

  const [files, setFiles] = useState<Array<IFile>>([]);

  const [isDragged, setIsDragged] = useState<boolean>(false);

  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    setIsDragged(false);

    const dropFiles = e.dataTransfer?.files;

    if (!dropFiles) return;

    if (dropFiles.length + files.length > maxNum) {
      alert(`파일은 최대 ${maxNum}까지 업로드 가능합니다.`);
      return;
    }

    filesUpload(dropFiles);
  };
  const handleUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    const eventTarget = e.target as HTMLInputElement;

    const inputFiles = eventTarget.files;

    if (!inputFiles) return;

    if (inputFiles.length + files.length > maxNum) {
      alert(`파일은 최대 ${maxNum}까지 업로드 가능합니다.`);
      return;
    }

    filesUpload(inputFiles);
  };
  const handleDragover = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
  };
  const handleDragenter = () => {
    setIsDragged(true);
  };
  const handleDragleave = (e: DragEvent<HTMLElement>) => {
    // 자식 요소로 이동시 이벤트가 발생하지 않도록 검증
    if (e.currentTarget.contains(e.relatedTarget as Node)) {
      return;
    }
    setIsDragged(false);
  };

  const filesUpload = (newFiles: FileList) => {
    const key = Date.now().toString();

    for (let i = 0; i < newFiles.length; i++) {
      if (newFiles[i].size > MAX_SIZE) {
        alert(`5MB 이하 파일을 선택해주세요.`);
        break;
      } else {
        let checkExtension = false;
        const fileName = newFiles[i].name;
        const size = newFiles[i].size;
        const fileExtension = fileName.substring(fileName.indexOf('.') + 1, fileName.length);

        if (extenstion.length > 0) {
          for (let i = 0; i < extenstion.length; i++) {
            if (fileExtension.toLowerCase() === extenstion[i].toLowerCase()) {
              checkExtension = true;
            }
          }
        } else {
          checkExtension = true;
        }

        if (checkExtension)
          if (checkExtension) {
            setFiles((prev) => [
              ...prev,
              {
                key: key + `/${i}`,
                name: fileName,
                size,
                type: fileExtension,
                originFile: newFiles[i],
              },
            ]);
          } else {
            alert('지원하지 않는 확장자입니다.');
          }
      }
    }
  };

  const handleDeleteFile = (key: string) => {
    setFiles(files.filter((file) => file.key !== key));
  };

  return {
    files,
    isDragged,
    handleUploadFile,
    handleDrop,
    handleDragover,
    handleDragenter,
    handleDragleave,
    handleDeleteFile,
  };
};

export default useDragUpload;
