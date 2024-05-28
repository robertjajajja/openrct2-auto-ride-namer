import {
  ADJECTIVE_PARTS,
  COLORS,
  COOL_PARTS,
  DESCRIPTION_PARTS,
  RIDE_PARTS,
} from '../constants';
import { objectValues } from './object-values.helpers';
import { pickRandomMember } from './pick-random-member.helpers';
import { NameType } from '../types';

const nameTypes = objectValues(NameType);
type GenerateNameColorParam =
  | {
      colorMode: 'none' | 'random-single' | 'random-multi';
      selectedColor: null;
    }
  | {
      colorMode: 'specified';
      selectedColor: (typeof COLORS)[number];
    };

export const generateName = (
  params: {
    nameType: NameType;
  } & GenerateNameColorParam = {
    nameType: pickRandomMember(nameTypes),
    colorMode: 'none',
    selectedColor: null,
  }
): string => {
  const { nameType, colorMode, selectedColor } = params;

  const colorParam: GenerateNameColorParam =
    colorMode === 'random-single'
      ? ({
          colorMode: 'specified',
          selectedColor: pickRandomMember(COLORS),
        } satisfies GenerateNameColorParam)
      : colorMode === 'specified'
        ? { colorMode, selectedColor }
        : { colorMode, selectedColor };
  const description = attachColor(
    pickRandomMember(DESCRIPTION_PARTS),
    colorParam
  );
  const ride = attachColor(pickRandomMember(RIDE_PARTS), colorParam);
  const cool = attachColor(pickRandomMember(COOL_PARTS), colorParam);
  const adjective = attachColor(pickRandomMember(ADJECTIVE_PARTS), colorParam);

  switch (nameType) {
    case NameType.DESCRIPTION_RIDE:
      return `${description} ${ride}`;
    case NameType.THE_DESCRIPTION_RIDE:
      return `The ${description} ${ride}`;
    case NameType.THE_DESCRIPTION:
      return `The ${description}`;
    case NameType.THE_ADJECTIVE_RIDE:
      return `The ${adjective} ${ride}`;
    case NameType.RIDE_OF_COOL:
      return `${ride} of ${cool}`;
  }
};

const attachColor = (
  originalName: string,
  { colorMode = 'none', selectedColor = null }: GenerateNameColorParam
): string => {
  switch (colorMode) {
    case 'none':
      return originalName;
    case 'specified':
      return `{${selectedColor}}${originalName}`;
    case 'random-single':
    case 'random-multi':
      return `{${pickRandomMember(COLORS)}}${originalName}`;
  }
};
