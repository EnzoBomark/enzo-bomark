import React from 'react';
import { DefaultTheme, useTheme } from 'styled-components';
import ChevronDown from './ChevronDown.svg';
import ChevronLeft from './ChevronLeft.svg';
import ChevronRight from './ChevronRight.svg';
import ArrowDown from './ArrowDown.svg';
import ArrowLeft from './ArrowLeft.svg';
import ArrowRight from './ArrowRight.svg';
import ArrowUpperRight from './ArrowUpperRight.svg';
import Discrod from './Discord.svg';
import GitHub from './GitHub.svg';
import Figma from './Figma.svg';
import Dribbble from './Dribbble.svg';
import Instagram from './Instagram.svg';
import LinkedIn from './LinkedIn.svg';
import Medium from './Medium.svg';
import Facebook from './Facebook.svg';
import LogoWithLogotype from './LogoWithLogotype.svg';
import Logo from './Logo.svg';
import Logotype from './Logotype.svg';

export const IconsType = {
  ChevronDown: 'ChevronDown',
  ChevronLeft: 'ChevronLeft',
  ChevronRight: 'ChevronRight',
  ArrowDown: 'ArrowDown',
  ArrowLeft: 'ArrowLeft',
  ArrowRight: 'ArrowRight',
  ArrowUpperRight: 'ArrowUpperRight',
  Discrod: 'Discrod',
  GitHub: 'GitHub',
  Figma: 'Figma',
  Dribbble: 'Dribbble',
  Instagram: 'Instagram',
  LinkedIn: 'LinkedIn',
  Medium: 'Medium',
  Facebook: 'Facebook',
  LogoWithLogotype: 'LogoWithLogotype',
  Logo: 'Logo',
  Logotype: 'Logotype',
} as const;

export type IconType = typeof IconsType[keyof typeof IconsType];

const Scales = {
  '4xs': '0.6rem',
  '3xs': '0.8rem',
  '2xs': '1.2rem',
  xs: '1.6rem',
  s: '2.0rem',
  m: '3.2rem',
  l: '4.6rem',
  xl: '6.4rem',
  '2xl': '9.6rem',
  '3xl': '14.4rem',
  '4xl': '21.6rem',
} as const;

type LockedIcon = {
  width: keyof typeof Scales;
  height?: keyof typeof Scales;
};

type FreeIcon = {
  unlocked: true;
  width: string | number;
  height?: string | number;
};

type Props = {
  type: IconType;
  color?: keyof DefaultTheme['color'];
} & XOR<LockedIcon, FreeIcon>;

export const Icon: React.FC<Props> = (props) => {
  const theme = useTheme();

  const IconComponent = {
    [IconsType.ChevronDown]: ChevronDown,
    [IconsType.ChevronLeft]: ChevronLeft,
    [IconsType.ChevronRight]: ChevronRight,
    [IconsType.ArrowDown]: ArrowDown,
    [IconsType.ArrowLeft]: ArrowLeft,
    [IconsType.ArrowRight]: ArrowRight,
    [IconsType.ArrowUpperRight]: ArrowUpperRight,
    [IconsType.Discrod]: Discrod,
    [IconsType.GitHub]: GitHub,
    [IconsType.Figma]: Figma,
    [IconsType.Dribbble]: Dribbble,
    [IconsType.Instagram]: Instagram,
    [IconsType.LinkedIn]: LinkedIn,
    [IconsType.Medium]: Medium,
    [IconsType.Facebook]: Facebook,
    [IconsType.LogoWithLogotype]: LogoWithLogotype,
    [IconsType.Logo]: Logo,
    [IconsType.Logotype]: Logotype,
  }[props.type];

  return (
    <IconComponent
      color={theme.color[props.color || 'g1000']}
      width={props.unlocked ? props.width : Scales[props.width]}
      height={
        props.unlocked ? props.height : Scales[props.height || props.width]
      }
    />
  );
};
