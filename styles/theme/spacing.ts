const rem = (px: number) => {
  return {
    [px]: `${px / 16}rem`,
  };
};

export const spacing = {
  ...rem(0),
  ...rem(1),
  ...rem(2),
  ...rem(4),
  ...rem(6),
  ...rem(8),
  ...rem(10),
  ...rem(12),
  ...rem(16),
  ...rem(20),
  ...rem(24),
  ...rem(28),
  ...rem(32),
  ...rem(40),
  ...rem(48),
  ...rem(64),
  ...rem(80),
  ...rem(96),
  ...rem(112),
  ...rem(128),
  ...rem(160),
};
