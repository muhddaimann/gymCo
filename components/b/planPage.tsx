import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useTheme } from "react-native-paper";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function PlanPage() {
  const theme = useTheme();

  return (
    <View style={styles.page}>
      <View style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <View style={styles.headerRow}>
          <MaterialCommunityIcons
            name="dumbbell"
            size={wp("6.5%")}
            color={theme.colors.primary}
          />
          <Text style={[styles.title, { color: theme.colors.onSurface }]}>
            Workout Builder
          </Text>
        </View>
        <Text style={[styles.desc, { color: theme.colors.onSurfaceVariant }]}>
          Create custom plans, add advanced structures like supersets, warm-ups
          and drop sets.
        </Text>

        <View style={styles.subSection}>
          <Text style={[styles.subTitle, { color: theme.colors.onSurface }]}>
            Quick Templates
          </Text>
          <View style={styles.tagRow}>
            <Text style={styles.tag}>Push</Text>
            <Text style={styles.tag}>Pull</Text>
            <Text style={styles.tag}>Legs</Text>
            <Text style={styles.tag}>Full Body</Text>
          </View>
        </View>

        <View style={styles.subSection}>
          <Text style={[styles.subTitle, { color: theme.colors.onSurface }]}>
            New Routine
          </Text>
          <TextInput
            placeholder="Routine Name"
            style={[styles.input, { borderColor: theme.colors.outline }]}
            placeholderTextColor={theme.colors.outline}
          />
          <Pressable
            style={[styles.button, { backgroundColor: theme.colors.primary }]}
          >
            <Text
              style={[styles.buttonText, { color: theme.colors.onPrimary }]}
            >
              Create
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <View style={styles.headerRow}>
          <MaterialCommunityIcons
            name="calendar-clock"
            size={wp("6.5%")}
            color={theme.colors.secondary}
          />
          <Text style={[styles.title, { color: theme.colors.onSurface }]}>
            Workout Scheduler
          </Text>
        </View>
        <Text style={[styles.desc, { color: theme.colors.onSurfaceVariant }]}>
          Organize weekly plans with smart gap-filler and calendar sync.
        </Text>

        <View style={styles.filterRow}>
          <Text style={styles.filter}>All</Text>
          <Text style={styles.filter}>Upper</Text>
          <Text style={styles.filter}>Lower</Text>
          <Text style={styles.filter}>Rest</Text>
        </View>

        <View style={styles.scheduleRow}>
          <Text style={styles.schedule}>Mon: Upper</Text>
          <Text style={styles.schedule}>Tue: Rest</Text>
          <Text style={styles.schedule}>Wed: Lower</Text>
        </View>
      </View>

      <View style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <View style={styles.headerRow}>
          <MaterialCommunityIcons
            name="play-circle-outline"
            size={wp("6.5%")}
            color={theme.colors.tertiary}
          />
          <Text style={[styles.title, { color: theme.colors.onSurface }]}>
            Active Session
          </Text>
        </View>
        <Text style={[styles.desc, { color: theme.colors.onSurfaceVariant }]}>
          Real-time session tracker with set progress and rest timers.
        </Text>

        <View style={styles.subSection}>
          <Text style={[styles.subTitle, { color: theme.colors.onSurface }]}>
            Session Preview
          </Text>
          <Text style={styles.preview}>5 sets • Bench Press • 12 reps</Text>
          <Text style={styles.preview}>3 sets • Pull-ups • Max reps</Text>
        </View>
      </View>

      <View style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <View style={styles.headerRow}>
          <MaterialCommunityIcons
            name="notebook-edit-outline"
            size={wp("6.5%")}
            color={theme.colors.primary}
          />
          <Text style={[styles.title, { color: theme.colors.onSurface }]}>
            Post Workout Summary
          </Text>
        </View>
        <Text style={[styles.desc, { color: theme.colors.onSurfaceVariant }]}>
          Log exertion, notes, injuries, and save your session.
        </Text>

        <View style={styles.subSection}>
          <Text style={[styles.subTitle, { color: theme.colors.onSurface }]}>
            Session Feedback
          </Text>
          <View style={styles.tagRow}>
            <Text style={styles.tag}>High Intensity</Text>
            <Text style={styles.tag}>Moderate</Text>
            <Text style={styles.tag}>Low Energy</Text>
            <Text style={styles.tag}>Injury</Text>
          </View>
        </View>

        <Pressable
          style={[styles.button, { backgroundColor: theme.colors.secondary }]}
        >
          <Text
            style={[styles.buttonText, { color: theme.colors.onSecondary }]}
          >
            Submit
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
  input: {
    borderWidth: 1,
    borderRadius: wp("2%"),
    padding: wp("2%"),
    fontSize: wp("3.5%"),
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
  filterRow: {
    flexDirection: "row",
    gap: wp("2%"),
    marginTop: wp("2%"),
  },
  filter: {
    paddingHorizontal: wp("3%"),
    paddingVertical: wp("1%"),
    backgroundColor: "#f0f0f0",
    borderRadius: wp("2%"),
    fontSize: wp("3.3%"),
  },
  scheduleRow: {
    gap: wp("1.5%"),
    marginTop: wp("2%"),
  },
  schedule: {
    fontSize: wp("3.5%"),
    color: "#444",
  },
  preview: {
    fontSize: wp("3.6%"),
    color: "#555",
  },
});
