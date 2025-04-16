import { html } from '@/dom';
import { container } from '~/components/container';
import { createRoute } from '~/router';
import { ui } from '~/ui';
import { styles } from './stacks-on-stacks.css';

export const stacksOnStacksRoute = createRoute('/stacks-on-stacks')({
  component: () =>
    container({
      variant: 'sm',
      children: html.div(
        { class: styles.content },
        ui.fadeInOnScroll({
          direction: 'static',
          delay: 'none',
          children: html.div(
            { class: styles.section },
            ui.fadeInOnScroll({
              children: ui.text({
                type: 'hero',
                children: `Stacks on stacks`,
              }),
            }),
            ui.text({
              type: 'subheading',
              variant: 'strong',
              children: `Introduction`,
            }),
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: `During my time working with mobile applications, I’ve sometimes encountered challenges when handling tabs and stacks—both personally and through conversations with colleagues. Here’s a quick overview of how to manage this effectively when using Expo Router.`,
            })
          ),
        }),
        ui.fadeInOnScroll({
          direction: 'static',
          delay: 'none',
          children: html.div(
            { class: styles.section },
            ui.text({
              type: 'subheading',
              variant: 'strong',
              children: `Routing best practices`,
            }),
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: `Navigation in mobile apps tends to be more complex and stateful than on the web. There are also some expectations on app naviations: each tab should preserve its own navigation state. For example:`,
            }),
            ui.list({
              items: [
                ui.text({
                  type: 'subheadline',
                  legibility: 'legible',
                  variant: 'muted',
                  children: `Navigate through several screens within a tab.`,
                }),
                ui.text({
                  type: 'subheadline',
                  legibility: 'legible',
                  variant: 'muted',
                  children: `Switch to a different tab and go through several screens there.`,
                }),
                ui.text({
                  type: 'subheadline',
                  legibility: 'legible',
                  variant: 'muted',
                  children: `Return back to the initial tab and resume exactly where they left off.`,
                }),
              ],
            }),
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: `Let’s use an example with the tabs Home, Explore, and Profile. Users might navigate to a user profile screen from any of these tabs:`,
            }),
            ui.list({
              items: [
                ui.text({
                  type: 'subheadline',
                  legibility: 'legible',
                  variant: 'muted',
                  children: `The Home tab might display a feed with links to user profiles.`,
                }),
                ui.text({
                  type: 'subheadline',
                  legibility: 'legible',
                  variant: 'muted',
                  children: `The Explore tab might allow users to search for others.`,
                }),
                ui.text({
                  type: 'subheadline',
                  legibility: 'legible',
                  variant: 'muted',
                  children: `The Profile tab might show the current user’s profile.`,
                }),
              ],
            }),
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: `Additionally, if a user opens a profile from the Explore tab, it should open within the Explore tab’s context, not redirect to the Profile tab. This highlights how app navigation often extends beyond the simpler patterns found on the web.`,
            }),
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: `To support this behavior, Expo Router allows you to define separate user profile routes within each tab, one for Home, one for Explore, and one for Profile. This ensures consistent, tab-scoped navigation. However, to avoid duplicating code, a good approach is to create small wrapper files for each tab's profile route. These wrappers import and render a shared profile component.`,
            })
          ),
        }),
        ui.fadeInOnScroll({
          direction: 'static',
          delay: 'none',
          children: html.div(
            { class: styles.section },
            ui.text({
              type: 'subheading',
              variant: 'strong',
              children: `Segmentation`,
            }),
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: `Expo Router also supports a segmentation feature that allows you to group routes together. This is particularly useful for creating a unified stack for all three tabs.`,
            }),
            html.div(
              { class: styles.block },
              ui.codeblock({
                lang: 'none',
                code: [
                  {
                    data: `app/(home,explore,profile)/users/[username].tsx`,
                  },
                ],
              })
            ),
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: `This single route definition works seamlessly across all three tabs.`,
            }),
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: `Having many screens in a single stack doesn’t actually impact performance, as long as they’re not all mounted at the same time. In my experience, working with a unified stack often feels simpler and more intuitive—more like web routing.`,
            })
          ),
        }),
        ui.fadeInOnScroll({
          direction: 'static',
          delay: 'none',
          children: html.div(
            { class: styles.section },
            ui.text({
              type: 'subheading',
              variant: 'strong',
              children: `Implementation Example`,
            }),
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: `Let’s take a look at how to implement this in practice. We’ll create a simple app with three tabs: Home, Explore, and Profile. Each tab will have its own stack navigator state.`,
            }),
            html.div(
              { class: styles.block },
              ui.codeblock({
                lang: 'none',
                code: [
                  {
                    data: `app
├── (tabs)
│   ├── (home,explore,profile)
│   │   ├── users
│   │   │   └── [username].tsx
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   ├── explore.tsx
│   │   ├── profile.tsx
│   │   ├── other-stuff.tsx
│   │   └── ...
│   └── _layout.tsx
├── _layout.tsx
├── +not-found.tsx
└── ...`,
                  },
                ],
              })
            ),
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: html.span(
                `Root layout `,
                ui.text({
                  span: true,
                  highlight: 'neutral',
                  children: `app/_layout.tsx`,
                })
              ),
            }),
            html.div(
              { class: styles.block },
              ui.codeblock({
                lang: 'typescript',
                code: [
                  {
                    data: `import { Stack } from 'expo-router';

function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
     
      <Stack.Screen name="+not-found" options={{ title: 'Not Found' }} />
    </Stack>
  );
}

export default RootLayout;`,
                  },
                ],
              })
            ),
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: html.span(
                `Tabs layout `,
                ui.text({
                  span: true,
                  highlight: 'neutral',
                  children: `app/(tabs)/_layout.tsx`,
                })
              ),
            }),
            html.div(
              { class: styles.block },
              ui.codeblock({
                lang: 'typescript',
                code: [
                  {
                    data: `import { Tabs } from 'expo-router';
import { TabBarIcon, TabBarLabel } from '~/ui';

function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="(home)"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarLabel: ({ focused, children }) => (
            <TabBarLabel focused={focused} children={children} />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon={['home', 'home-outline']} focused={focused} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="(explore)"
        options={{
          headerShown: false,
          title: 'Explore',
          tabBarLabel: ({ focused, children }) => (
            <TabBarLabel focused={focused} children={children} />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon={['search', 'search-outline']} focused={focused} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="(profile)"
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarLabel: ({ focused, children }) => (
            <TabBarLabel focused={focused} children={children} />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon={['user', 'user-outline']} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}

export default TabLayout;`,
                  },
                ],
              })
            ),
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: html.span(
                `Shared stack layout `,
                ui.text({
                  span: true,
                  highlight: 'neutral',
                  children: `app/(tabs)/(home,explore,profile)/_layout.tsx`,
                })
              ),
            }),
            html.div(
              { class: styles.block },
              ui.codeblock({
                lang: 'typescript',
                code: [
                  {
                    data: `import { Stack } from 'expo-router';
import { useMemo } from 'react';

const StackLayout = ({ segment }: { segment: string }) => {
  const tabs = useMemo(() => {
    switch (segment) {
      case '(home)':
        return <Stack.Screen name="index" options={{ title: 'Home' }} />;
      case '(explore)':
        return <Stack.Screen name="explore" options={{ title: 'Explore' }} />;
      case '(profile)':
        return <Stack.Screen name="profile" options={{ title: 'Profile' }} />;
      default:
        throw new Error(
          \`Unknown segment: $\{segment}. Expected '(home)', '(explore)', or '(profile)'.\`
        );
    }
  }, [segment]);

  return (
    <Stack>
      {tabs}
    
      <Stack.Screen name="users/[username]" />
    
      <Stack.Screen name="other-stuff" options={{ title: 'Other Stuff' }} />
    </Stack>
  );
};

export default StackLayout;`,
                  },
                ],
              })
            )
          ),
        }),
        ui.fadeInOnScroll({
          direction: 'static',
          delay: 'none',
          children: html.div(
            { class: styles.section },
            ui.text({
              type: 'subheading',
              variant: 'strong',
              children: `Conclusion`,
            }),
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: html.span(
                `With this setup, you can now navigate to `,
                ui.text({
                  span: true,
                  highlight: 'neutral',
                  children: `users/[username]`,
                }),
                ` or `,
                ui.text({
                  span: true,
                  highlight: 'neutral',
                  children: `other-stuff`,
                }),
                ` from any of the three tabs, and the navigation state for each tab will be preserved. You can also add more screens to each tab's stack as needed.`
              ),
            })
          ),
        })
      ),
    }),
});
