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
              children: `Navigation in mobile apps tends to be more complex and stateful than on the web. There are also expectations on app navigation: each tab should preserve its own navigation state. For example:`,
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
              children: `Additionally, if a user opens a profile from the Explore tab, it should open within the Explore tab’s context, not redirect to the Profile tab.`,
            }),
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: `This behavior is achievable in Expo Router by defining a separate user profile route within each tab, one for Home, one for Explore, and one for Profile. This ensures consistent, tab-scoped navigation. However, to avoid duplicating code, a good approach is to move the screens out of the app router and instead import them from a shared location. This way, you can have a single implementation of the user profile screen that is used in all three tabs.`,
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
              children: `Expo Router also supports route grouping. This is particularly useful for creating a unified stack for all three tabs.`,
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
              children: `Let’s take a look at how to implement this in practice. We’ll start with the following route structure:`,
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
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: `This is the root layout for your app. It’s a stack that contains the tabs layout and a not-found route. The not-found route is used to handle any routes that don’t match the defined routes in the app.`,
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
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: `This tabs layout defines the three tabs: Home, Explore, and Profile. Each tab has its own stack state, but they all share the same stack layout. This is achieved by using the segment name in the stack layout.`,
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
            ui.text({
              type: 'subheadline',
              legibility: 'legible',
              children: `This is the shared stack layout for all three tabs. It only defines one of the tab specific screens plus the screens that are common across all tabs, such as the user profile screen and any other screens that are shared between the tabs.`,
            }),
            html.div(
              { class: styles.block },
              ui.codeblock({
                lang: 'typescript',
                code: [
                  {
                    data: `import { Stack } from 'expo-router';

type StackLayoutProps = {
  segment: string;
};

function StackLayout({ segment }: StackLayoutProps) {
  function tabs() {
    switch (segment) {
      case '(home)':
        return <Stack.Screen name="index" options={{ title: 'Home' }} />;
      case '(explore)':
        return <Stack.Screen name="explore" options={{ title: 'Explore' }} />;
      case '(profile)':
        return <Stack.Screen name="profile" options={{ title: 'Profile' }} />;
      default:
        throw new Error(\`Unknown segment: $\{segment}\`);
    }
  }

  return (
    <Stack>
      {tabs()}
    
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
