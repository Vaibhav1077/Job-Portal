"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAppData } from "@/context/AppContext";
import { AccontProps } from "@/type";
import { Award, Plus, Sparkle, X } from "lucide-react";
import React, { useState } from "react";

const Skills: React.FC<AccontProps> = ({ user, isYourAccount }) => {
  const { addSkill, btnLoading, removeSkill } = useAppData();
  const [skill, setSkill] = useState("");

  const addSkillHandler = () => {
    if (!skill.trim()) {
      alert("Please enter a skill");
      return;
    }
    addSkill(skill, setSkill);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addSkillHandler();
    }
  };

  const removeSkillHandler = (skillToRemove: string) => {
    if (confirm(`Are you sure you want to remove ${skillToRemove} ?`)) {
      removeSkill(skillToRemove);
    }
  };
  return (
  <div className="max-w-5xl mx-auto px-4 py-8">

    <Card className="overflow-hidden border border-gray-200 dark:border-gray-700 
    bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl shadow-xl rounded-2xl">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center">
            <Award size={20} />
          </div>

          <div>
            <CardTitle className="text-xl md:text-2xl">
              {isYourAccount ? "Your Skills" : "User Skills"}
            </CardTitle>

            {isYourAccount && (
              <CardDescription className="text-white/80 text-sm">
                Showcase your expertise and abilities
              </CardDescription>
            )}
          </div>
        </div>
      </div>

      {/* INPUT SECTION */}
      {isYourAccount && (
        <div className="p-6 border-b flex flex-col sm:flex-row gap-3">

          <div className="relative flex-1">
            <Sparkle
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50"
            />

            <Input
              type="text"
              placeholder="e.g. React, Node.js, Python..."
              className="h-11 pl-10 rounded-lg bg-white dark:bg-gray-900 shadow-sm focus:ring-2 focus:ring-purple-500"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>

          <Button
            onClick={addSkillHandler}
            disabled={!skill.trim() || btnLoading}
            className="h-11 px-6 gap-2 
            bg-gradient-to-r from-purple-600 to-indigo-600 
            hover:from-purple-700 hover:to-indigo-700 
            shadow-md hover:shadow-lg transition"
          >
            <Plus size={18} />
            Add Skill
          </Button>

        </div>
      )}

      {/* SKILLS */}
      <CardContent className="p-6">

        {user.skills && user.skills.length > 0 ? (
          <div className="flex flex-wrap gap-3">

            {user.skills.map((e, i) => (
              <div
                key={i}
                className="group flex items-center gap-2 px-4 py-2 rounded-full 
                bg-gray-100 dark:bg-gray-800 
                hover:bg-gray-200 dark:hover:bg-gray-700 
                transition-all shadow-sm hover:shadow-md"
              >
                <span className="text-sm font-medium">{e}</span>

                {isYourAccount && (
                  <button
                    onClick={() => removeSkillHandler(e)}
                    className="h-6 w-6 rounded-full flex items-center justify-center 
                    text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 
                    transition"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            ))}

          </div>
        ) : (

          /* EMPTY STATE */
          <div className="text-center py-14">

            <div className="inline-flex items-center justify-center w-16 h-16 
            rounded-full bg-gray-200 dark:bg-gray-800 mb-4">
              <Award size={30} className="opacity-40" />
            </div>

            <CardDescription className="text-base opacity-70">
              {isYourAccount
                ? "No skills added yet. Start building your profile!"
                : "No skills added by user"}
            </CardDescription>

          </div>
        )}

      </CardContent>
    </Card>
  </div>
);
};

export default Skills;
