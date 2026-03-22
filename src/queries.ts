import { queryOptions } from '@tanstack/react-query'

export const OnboardingQueries = {
  all: ['onboarding'],
  listKey: () => [OnboardingQueries.all, 'list'],
  list: () =>
    queryOptions({
      queryKey: OnboardingQueries.listKey(),
      queryFn: async () => {
        await new Promise((res) => setTimeout(res, 3000))
      },
    }),
}
