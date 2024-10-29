import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

interface ProjectInfo {
  name: string;
  description: string;
  links: string[]
}

const CohortProjects = () => {
  const projectList: ProjectInfo[] = [
    {
      name: "Slay the Moloch", 
      description: "Based on cookie clicker games, but much more educational, this game should offer a platform to create, explore and connect with Cohort VII. TL;DR: We are building a time wasting appreciation game with shitcoins valuable tokens and cool sprites and did i say tokens? and whatnot else. Sky is the limit.", 
      links: ["https://moloch.mic0.dev", "https://git.mic0.dev/mico/idle_moloch"]
    },
    {
      name: "CharmverseVII", 
      description: "Token-gated repository of the cohort's educational and organizational content.", 
      links: ["https://app.charmverse.io/join?domain=raidguild-cohort-season-7"]
    },
    {
      name: "CohortView.eth", 
      description: "The cornerstone of the Hamsterverse, showcasing team projects through the unique Mad Libs/Viewmaster lens. The hamster narrator becomes the 'host' of this show, connecting everything together.", 
      links: ["https://github.com/JacobHomanics/viewmaster"]
    },
    {
      name: "Expensive Message", 
      description: "Every message costs 2x more RGCVII than the previous one!When anyone posts after you, you double your money.", 
      links: ["https://expensivemessage.com"]
    },
    {
      name: "Hats Tree", 
      description: "A Hats tree that contains a top hat, autonomous agent hat, and a member hat that requires the wearer has 2000+ CohortVIIToken.", 
      links: ["https://app.hatsprotocol.xyz/trees/8453/90"]
    },
  ]

  return (
    <Card className="col-span-2 bg-gradient-to-t from-[#262f41] to-[#475778] backdrop-blur-sm border-white">
      <CardHeader className="flex flex-row items-center justify-between border-b border-white p-5">
        <CardTitle className="w-full text-2xl font-serif text-rg-red">CohortVII Projects</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row flex-wrap justify-between py-10">
        {projectList.map((project) => (
          <DropdownMenu key={project.name}>
            <DropdownMenuTrigger asChild>
              <div className="flex flex-row items-center gap-1">
                <p className="text-white text-lg">{project.name}</p>
                <ChevronDown size={32} color="#FF3864"/>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-96">
                <DropdownMenuItem>
                  <p>{project.description}</p>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex flex-col">
                  {project.links.map((link) => (
                    <a 
                      className="text-rg-aqua"
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link}
                    </a>
                  ))}
                </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ))}
      </CardContent>
    </Card>
  )
}

export { CohortProjects };