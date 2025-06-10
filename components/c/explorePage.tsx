import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useTheme } from "react-native-paper";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function ExplorePage() {
  const theme = useTheme();

  return (
    <View style={styles.page}>
      <View style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <View style={styles.headerRow}>
          <MaterialCommunityIcons
            name="library"
            size={wp("6.5%")}
            color={theme.colors.primary}
          />
          <Text style={[styles.title, { color: theme.colors.onSurface }]}>
            Workout Library
          </Text>
        </View>
        <Text style={[styles.desc, { color: theme.colors.onSurfaceVariant }]}>
          Browse routines based on goals, categories, and levels.
        </Text>

        <View style={styles.subSection}>
          <Text style={[styles.subTitle, { color: theme.colors.onSurface }]}>
            Goal
          </Text>
          <View style={styles.tagRow}>
            <Text style={styles.tag}>Fat Loss</Text>
            <Text style={styles.tag}>Hypertrophy</Text>
            <Text style={styles.tag}>Strength</Text>
          </View>
        </View>

        <View style={styles.subSection}>
          <Text style={[styles.subTitle, { color: theme.colors.onSurface }]}>
            Categories
          </Text>
          <View style={styles.tagRow}>
            <Text style={styles.tag}>No Equipment</Text>
            <Text style={styles.tag}>Dumbbell Only</Text>
            <Text style={styles.tag}>Machines</Text>
          </View>
        </View>
      </View>

      <View style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <View style={styles.headerRow}>
          <MaterialCommunityIcons
            name="video-outline"
            size={wp("6.5%")}
            color={theme.colors.secondary}
          />
          <Text style={[styles.title, { color: theme.colors.onSurface }]}>
            Video Tutorials
          </Text>
        </View>
        <Text style={[styles.desc, { color: theme.colors.onSurfaceVariant }]}>
          Learn form, techniques, and save favorite videos.
        </Text>

        <View style={styles.subSection}>
          <Text style={[styles.subTitle, { color: theme.colors.onSurface }]}>
            Popular Videos
          </Text>
          <Text style={styles.preview}>Deadlift - Common Mistakes</Text>
          <Text style={styles.preview}>Squat Form Guide</Text>
        </View>
      </View>

      <View style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <View style={styles.headerRow}>
          <MaterialCommunityIcons
            name="account-group"
            size={wp("6.5%")}
            color={theme.colors.tertiary}
          />
          <Text style={[styles.title, { color: theme.colors.onSurface }]}>
            Community Picks
          </Text>
        </View>
        <Text style={[styles.desc, { color: theme.colors.onSurfaceVariant }]}>
          See what routines are trending near you.
        </Text>

        <View style={styles.subSection}>
          <Text style={[styles.subTitle, { color: theme.colors.onSurface }]}>
            Trending Now
          </Text>
          <Text style={styles.preview}>HIIT Express - 15 min</Text>
          <Text style={styles.preview}>Upper Split Power Builder</Text>
        </View>
      </View>

      <View style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <View style={styles.headerRow}>
          <MaterialCommunityIcons
            name="robot-outline"
            size={wp("6.5%")}
            color={theme.colors.primary}
          />
          <Text style={[styles.title, { color: theme.colors.onSurface }]}>
            AI Recommendations
          </Text>
        </View>
        <Text style={[styles.desc, { color: theme.colors.onSurfaceVariant }]}>
          Get a smart routine based on your history and available time.
        </Text>

        <View style={styles.subSection}>
          <Text style={[styles.subTitle, { color: theme.colors.onSurface }]}>
            Example Prompt
          </Text>
          <Text style={styles.preview}>
            &quot;I have 30 mins and resistance band&quot;
          </Text>
        </View>

        <Pressable
          style={[styles.button, { backgroundColor: theme.colors.primary }]}
        >
          <Text style={[styles.buttonText, { color: theme.colors.onPrimary }]}>
            Generate Plan
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    gap: wp("2%"),
  },
  card: {
    borderRadius: wp("3%"),
    padding: wp("4%"),
    elevation: 2,
    gap: wp("3%"),
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp("3%"),
  },
  title: {
    fontSize: wp("4.5%"),
    fontWeight: "700",
  },
  desc: {
    fontSize: wp("3.8%"),
    lineHeight: wp("5%"),
    fontWeight: "400",
  },
  subSection: {
    gap: wp("2%"),
    marginTop: wp("2%"),
  },
  subTitle: {
    fontSize: wp("4%"),
    fontWeight: "600",
  },
  tagRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: wp("2%"),
  },
  tag: {
    backgroundColor: "#e0e0e0",
    paddingHorizontal: wp("3%"),
    paddingVertical: wp("1.5%"),
    borderRadius: wp("2%"),
    fontSize: wp("3.3%"),
  },
  preview: {
    fontSize: wp("3.6%"),
    color: "#555",
  },
  button: {
    paddingVertical: wp("2%"),
    paddingHorizontal: wp("3%"),
    borderRadius: wp("2%"),
    alignItems: "center",
    marginTop: wp("2%"),
  },
  buttonText: {
    fontSize: wp("3.8%"),
    fontWeight: "600",
  },
});
