const config = {
  // 1. 기본 규칙으로 conventional-commit을 사용합니다.
  extends: ['@commitlint/config-conventional'],

  // 2. 원하는 규칙을 덮어씁니다.
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'Feat',
        'Fix',
        'Style',
        'Refactor',
        'Design',
        'Comment',
        'Docs',
        'Test',
        'Chore',
        'Env',
        'Rename',
        'Remove',
      ],
    ],
    'type-case': [2, 'always', 'pascal-case'],
  },
};

// CommonJS 방식으로 내보내기
module.exports = config;
