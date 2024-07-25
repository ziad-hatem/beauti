"use client"
import { sectionsTree } from "@/data/fake";
import SectionHead from "@/components/common/filter/SectionHead";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SectionsBlock = ({ tree }) => {
  const path = usePathname();
  return (
    <div className="sections-links">

      {sectionsTree.map((branch, i) =>{
        if (path == branch.href) {
          return(
              <SectionHead
          key={branch.title}
          headName={branch.title}
          contentClasses={"text-sm py-1"}
          opened={true}
          activation={"active"}
          content={
            branch.subSections.map((subBranch,i) => (
            <SectionHead
              key={subBranch.title + i}
              headName={subBranch.title}
              opened={false}
              />
              ))
            }
            />
              )
        }else if(path.split("/")[1] == branch.href.split("/")[1]){
          return(
            <SectionHead
            key={branch.title}
            headName={branch.title}
            contentClasses={"text-sm py-1"}
            opened={true}
            content={
          branch.subSections.map((subBranch, i) => {
            (
          <SectionHead
            key={subBranch.title + i}
            headName={subBranch.title}
            className={path.split("/")[2] == subBranch.href.split("/")[1] ? "active" : null}
            opened={false}
            />
            )})
          }
          />
            )
        }})
        }
    </div>
  );
};
export default SectionsBlock;
