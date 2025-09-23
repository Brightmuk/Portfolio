import {FC, memo, PropsWithChildren} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{ skillGroup: SkillGroupType }>> =
  memo(({skillGroup}) => {
    const {name, skills} = skillGroup;
    return (
      <div className="flex flex-col">
        <span className="text-lg font-bold">{name}</span>
        <br />
        {/* Horizontal layout with wrap */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Skill key={`${skill.name}-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    );
  });

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{ skill: SkillType }> = memo(({skill}) => {
  const {name, image} = skill;

  return (
    <div className="flex w-30 items-center gap-2 rounded-full border border-gray-300 bg-white px-2 py-1 shadow-sm">
      <img
        alt={name}
        className="h-10  rounded-full object-cover"
        src={image}
      />
      <span className="text-sm font-medium text-gray-800">{name}</span>
    </div>
  );
});

// Container to hold multiple chips
export const SkillList: FC<{skills: SkillType[]}> = memo(({skills}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Skill key={skill.name} skill={skill} />
      ))}
    </div>
  );
});


Skill.displayName = 'Skill';
