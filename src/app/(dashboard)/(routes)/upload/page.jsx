import Image from "next/image";
import FileUpload from "../../_components/FileUpload"

export default function Upload() {
    return (
        <>
            <div className="flex mt-[46px] ml-[45px] justify-between dark:bg-light-dark dark:text-white h-auto">
                <div className="text-3xl font-semibold">
                    Upload CSV
                </div>
                <div className='flex items-center mr-[45px]'>
                    <Image
                        src={'/bell.svg'}
                        width={18}
                        height={23}
                        className="mr-2"
                    />
                    Avatar
                </div>
            </div>
            <div className="relative top-10">
                <FileUpload />
            </div>
        </>
    );
}